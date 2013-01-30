class AddColumnToAbilities < ActiveRecord::Migration
  def change
    add_column :abilities, :column, :number, :default => 0
    add_column :abilities, :order, :number, :default => 0
  end
end
