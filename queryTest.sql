/* Soal no 1 : Tabel Data Transaksi */
USE db_transaksi
CREATE TABLE data_transaksi (
    id int NOT NULL AUTO_INCREMENT primary key,
    tanggal_order timestamp DEFAULT CURRENT_TIMESTAMP,
    status_pelunasan varchar(20),
    tanggal_pembayaran timestamp DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO data_transaksi (id,status_pelunasan) values (11, "lunas");
INSERT INTO data_transaksi (id,status_pelunasan) values (12, "lunas");
INSERT INTO data_transaksi (id,status_pelunasan) values (13, "pending");
INSERT INTO data_transaksi (id,status_pelunasan) values (14, "pending");
INSERT INTO data_transaksi (id,status_pelunasan) values (15, "lunas");
INSERT INTO data_transaksi (id,status_pelunasan) values (16, "pending");

/* Soal no 2 : Tabel Detail Transaksi */
CREATE TABLE detail_transaksi (
    id int NOT NULL AUTO_INCREMENT primary key,
    id_transaksi int,
    harga float,
    jumlah int,
    subtotal float
);

INSERT INTO detail_transaksi (id_transaksi, harga, jumlah, subtotal) values (11, 11000, 2, 24000);
INSERT INTO detail_transaksi (id_transaksi, harga, jumlah, subtotal) values (12, 12000, 5, 60000);
INSERT INTO detail_transaksi (id_transaksi, harga, jumlah, subtotal) values (13, 13000, 2, 24000);
INSERT INTO detail_transaksi (id_transaksi, harga, jumlah, subtotal) values (14, 14000, 1, 14000);
INSERT INTO detail_transaksi (id_transaksi, harga, jumlah, subtotal) values (15, 15000, 2, 30000);
INSERT INTO detail_transaksi (id_transaksi, harga, jumlah, subtotal) values (16, 16000, 3, 48000);


/* Soal no 3 : Query Select */
SELECT dt.id, dt.tanggal_order, dt.status_pelunasan AS status, dt.tanggal_pembayaran, dtl.subtotal AS total, dtl.jumlah AS jumlah_barang
FROM data_transaksi dt LEFT JOIN detail_transaksi dtl 
ON dt.id = dtl.id_transaksi