
import { con } from "./connection.js";


export async function inserirHeroi(heroi) {

    const comando = `INSERT INTO tb_super_heroi(
                            nm_super_heroi, 
                            ds_super_poder, 
                            bt_voa
                    ) values (?, ?, ?)`;

    console.log(heroi);
    const [reposta] = await con.query(comando, [heroi.nm_super_heroi, heroi.ds_super_poder, heroi.bl_voa]);
    heroi.id = reposta.insertId;

    return heroi;

}