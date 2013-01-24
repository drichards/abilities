class CreateAbilities < ActiveRecord::Migration
  def change
    create_table :abilities do |t|
      t.string :name
      t.string :type
      t.string :description
      t.string :body

      t.timestamps
    end
  end
end
