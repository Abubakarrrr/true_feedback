import {Message} from '@/model/User'

export interface ApiResponse{
    success:boolean;
    message:String;
    isAccpetingMessages?:boolean;
    messages?:Array<Message>
}