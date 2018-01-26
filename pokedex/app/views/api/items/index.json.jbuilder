@items.each do |item|
  json.set! item.id do
    # Option 1
    json.extract! item, :pokemon_id, :name, :price, :happiness
    json.image_url asset_path(item.image_url)

    # Option 2
    # json.pokemon_id item.pokemon_id
    # json.name item.name
    # ...
  end
end
