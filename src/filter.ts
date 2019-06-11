import Vue from 'vue'
import FilePathParser from "@/persistence/filter/FilePathParser.pipe"


Vue.filter('FilePathParser', FilePathParser);
