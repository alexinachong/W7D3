@pokemon.each do |onePokemon|
  json.set! onePokemon.id do
    json.extract! onePokemon, :id, :name
    json.image_url asset_path(onePokemon.image_url)
  end
end
