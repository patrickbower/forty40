import $ from "jquery";

export default function ajax(url) {
  return $.ajax({
    url: url
  }).done(function(data) {
    return data;
  }).fail(function(err) {
    return err; 
  });
}