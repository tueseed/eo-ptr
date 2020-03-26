<div class="row text-center">
    <div class="col-sm-12">
        <div class="form-group text-center">
            <img id="profileImage" class="shadow-sm" style="width:100px;height:100px;border-radius:50px 50px;"/>
            <input type="hidden" id="uIdInput" name="uIdInput">
        </div>
    </div>
</div>

<div class="row text-center">
    <div class="col-sm-12">
        <div class="form-group text-center">
            <textarea class="form-control" rows="5" id="comment_msg" placeholder="บอกให้คนอื่นรู้ว่าคุณกำลังทำอะไรอยู่"></textarea>
        </div>
    </div>
</div>

<div class="row text-center">
    <div class="col-sm-12">
        <button class="btn btn-outline-primary btn-block "  id="camera_btn"  style="border-radius:50px 50px;">
            <i class="fas fa-camera"></i>
        </button>
    </div>
</div>

<div class="row text-center mt-2">
    <div class="col-sm-12">
        <button class="btn btn-outline-primary btn-block "  id="save_btn" onclick="post_msg()" style="border-radius:50px 50px;">
            <i class="fas fa-paper-plane" aria-hidden="true"></i>
            โพสต์
        </button>
    </div>
</div>

<input id="picture_post" type="file" name="name" style="display: none;" accept="image/*" capture>
        