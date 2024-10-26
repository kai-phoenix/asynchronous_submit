const send_button=document.getElementById("send_button_confirm")
const result_area=document.getElementById("result_area")
// let result_content=document.getElementById("result")
send_button.addEventListener("click",(event)=>{
    event.preventDefault();
    const search_form_data=new FormData()
    const id_search=document.getElementById("search_id").value
    const pass_search=document.getElementById("search_pass").value
    const async_submit=async()=>{
        // 送付データを作成
        search_form_data.append('search_id',id_search)
        search_form_data.append('search_pass',pass_search)
        const url="../activate.php";

        const response=await fetch(url,{
            method:'post',
            body:search_form_data,
        })
        if(response.status===200)
        {
            console.log("通信成功")
        }
        else
        {
            console.log("通信エラー")
        }
        const json_search=await response.json()
        // 値返却エリアが存在しない場合、再取得する
        let result_content = document.getElementById("result");
        if(result_content===null)
        {
            const result_div=document.createElement("div")
            result_div.setAttribute("id","result")
            result_area.append(result_div)
            result_content=result_div
        }
        result_content.innerHTML=json_search.display.id
    }
    async_submit();
})
const close_button=document.getElementById("send_button_cancel")
close_button.addEventListener("click",(event)=>{
    event.preventDefault();
    let result_content = document.getElementById("result");
    if(result_content!==null)
    {
        result_content.remove()
    }
})
