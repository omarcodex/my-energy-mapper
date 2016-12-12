class CreateStates < ActiveRecord::Migration[5.0]
  def change
    create_table :states do |t|
      t.name :text
      t.data1 :integer
      t.data2 :integer
      t.data3 :integer
      t.data4 :integer
      t.data5 :integer

      t.timestamps
    end
  end
end
