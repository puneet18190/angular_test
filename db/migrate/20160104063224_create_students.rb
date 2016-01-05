class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.integer :phone
      t.text :address

      t.timestamps null: false
    end
  end
end
