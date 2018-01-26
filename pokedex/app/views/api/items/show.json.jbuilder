json.item do
  json.extract! @item, :pokemon_id, :name, :price, :happiness
  json.image_url asset_path(@item.image_url)
end 
