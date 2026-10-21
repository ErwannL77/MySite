import qrcode

qr = qrcode.QRCode(box_size=30, border=4) 
qr.add_data("https://erwannloury.space")
qr.make(fit=True)
qr.make_image(fill_color="black", back_color="white").save("qrcode.png")