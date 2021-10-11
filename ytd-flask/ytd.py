import pytube

from pytube import YouTube


def linkArray(link):
    yt = YouTube(link)

    list = {
    "title" : yt.title.strip(),
    "image" : yt.thumbnail_url.strip(),
    "video" : yt.streams.get_highest_resolution().url.strip(),
    "audio" : yt.streams.get_audio_only().url.strip()
    }


    return list