# sys-presentation
vous trouverez ici un site web sur un site de telechergament
#voici les etapes asuivre pour reussir un site d hebergement securiser

Connecte-toi à la machine virtuelle Debian en tant qu'utilisateur root.

Ouvre un terminal et exécute la commande suivante :
ssh root@[adresse IP de la machine virtuelle]
Installe le serveur Apache.

Exécute la commande suivante :
sudo apt-get install apache2
Installe le serveur FTP.

Exécute la commande suivante :
sudo apt-get install vsftpd
Configure le serveur Apache pour qu'il serve le site web de la plateforme de distribution de films et séries.

Ouvre le fichier /etc/apache2/sites-available/default dans un éditeur de texte.
Ajoute les lignes suivantes au fichier :
<VirtualHost *:80>

ServerName your-domain.com

DocumentRoot /var/www/html

<Directory /var/www/html>

Options Indexes FollowSymLinks MultiViews

AllowOverride All

Order allow,deny

Allow from all

</Directory>

</VirtualHost>
Configure le serveur FTP pour qu'il permette aux utilisateurs de télécharger des films et séries.

Ouvre le fichier /etc/vsftpd.conf dans un éditeur de texte.
Active les options suivantes dans le fichier :
anonymous_enable=YES
local_enable=NO
write_enable=YES
anon_upload_enable=YES
anon_umask=022
Active le cryptage des mots de passe FTP.

Exécute la commande suivante :
sudo passwd ftp
Limite l'accès au serveur FTP à des utilisateurs spécifiques.

Ouvre le fichier /etc/vsftpd.userlist dans un éditeur de texte.
Ajoute les noms d'utilisateurs autorisés au fichier.
Utilise un pare-feu pour bloquer les connexions non autorisées au serveur FTP.

Exécute la commande suivante :
sudo ufw allow 21
Met à jour le serveur Apache et les autres logiciels installés sur le serveur régulièrement.

Exécute la commande suivante :
sudo apt-get update
* Exécute la commande suivante :
sudo apt-get upgrade
Une fois que tu as suivi toutes les étapes ci-dessus, tu auras créé un système de téléchargement sécurisé pour une plateforme de distribution de films et séries sur Debian dans VMware
