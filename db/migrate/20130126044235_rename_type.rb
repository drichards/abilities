class RenameType < ActiveRecord::Migration
  def up
    rename_column :abilities, :type, :ability_type
  end

  def down
    rename_column :abilities, :ability_type, :type
  end
end
