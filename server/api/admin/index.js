/**
 * Created by hama on 2018/3/2.
 */
import { Router } from 'express'
const router = Router()

router.get('/',function(req,res){
    res.send('hello admin');
})
module.exports = router