import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function AddProductForm() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [imageFile, setImageFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!imageFile) return alert('Please upload an image')

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(`products/${Date.now()}-${imageFile.name}`, imageFile)

    if (uploadError) return alert('Image upload failed')

    const imageUrl = supabase.storage
      .from('product-images')
      .getPublicUrl(uploadData.path).data.publicUrl

    const { error } = await supabase.from('products').insert({
      name,
      price,
      description,
      image_url: imageUrl,
    })

    if (error) alert('Failed to add product')
    else {
      alert('Product added successfully!')
      setName('')
      setPrice('')
      setDescription('')
      setImageFile(null)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Add New Product</h3>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  )
}
