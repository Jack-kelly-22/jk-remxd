ffmpeg -video_size 1000x800 -framerate 20 -f x11grab -i :0.0+2,70 -f mpegts -codec:v mpeg1video -s 1000x800 -b:v 6000k -bf 0  http://localhost:8081/supersecret