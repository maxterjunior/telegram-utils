# Servicio
```sh
sudo cp telegram-utils.service /etc/systemd/system
sudo systemctl enable telegram-utils.service
sudo systemctl start telegram-utils.service
journalctl -u telegram-utils
sudo systemctl stop telegram-utils
```

Para resetear el servicio:
```sh
sudo systemctl restart telegram-utils
```  