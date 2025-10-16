// Đối tượng thuVien quản lý sách
const thuVien = {
    danhSachSach: [],

    // 1. Thêm sách 
    themSach: function(tieuDe, tacGia, namXuatBan) {
        const sachMoi = {
            tieuDe: tieuDe,
            tacGia: tacGia,
            namXuatBan: namXuatBan,
            daMuon: false
        };
        this.danhSachSach.push(sachMoi);
        console.log(` Đã thêm sách: "${tieuDe}" của tác giả ${tacGia}.`);
    },

    // 2. Tìm sách 
    timSach: function(tieuDe) {
        for (let sach of this.danhSachSach) {
            if (sach.tieuDe.toLowerCase() === tieuDe.toLowerCase()) {
                return sach;
            }
        }
        return null;
    },

    // 3. Mượn sách
    muonSach: function(tieuDe) {
        const sach = this.timSach(tieuDe);
        if (sach) {
            if (!sach.daMuon) {
                sach.daMuon = true;
                console.log(`Bạn đã mượn sách: "${tieuDe}".`);
            } else {
                console.log(` Sách "${tieuDe}" đã được mượn rồi.`);
            }
        } else {
            console.log(` Không tìm thấy sách "${tieuDe}" trong thư viện.`);
        }
    }
};
