import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCity1730213366137 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                INSERT INTO city_entity (label, value) VALUES 
                ('台北市', '台北市'), ('新北市', '新北市'), ('桃園市', '桃園市'), ('新竹市', '新竹市'), ('新竹縣', '新竹縣'), 
                ('苗栗縣', '苗栗縣'), ('台中市', '台中市'), ('彰化縣', '彰化縣'), ('南投縣', '南投縣'), ('雲林縣', '雲林縣'), 
                ('嘉義市', '嘉義市'), ('嘉義縣', '嘉義縣'), ('台南市', '台南市'), ('高雄市', '高雄市'), ('屏東縣', '屏東縣'), 
                ('台東縣', '台東縣'), ('花蓮縣', '花蓮縣'), ('宜蘭縣', '宜蘭縣'), ('基隆市', '基隆市'), ('澎湖縣', '澎湖縣'), 
                ('金門縣', '金門縣'), ('連江縣', '連江縣');
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                DELETE FROM city_entity WHERE value IN (
                    '台北市', '新北市', '桃園市', '新竹市', '新竹縣', 
                    '苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', 
                    '嘉義市', '嘉義縣', '台南市', '高雄市', '屏東縣', 
                    '台東縣', '花蓮縣', '宜蘭縣', '基隆市', '澎湖縣', 
                    '金門縣', '連江縣'
                );
            `);
  }
}
