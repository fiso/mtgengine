"use strict";
const Constants = require ("../../../Constants");
const YoungWeiRecruitsBase = require("../setME3/YoungWeiRecruits");

class YoungWeiRecruits extends YoungWeiRecruitsBase {
  constructor(game) {
    super(game, "Young Wei Recruits", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = YoungWeiRecruits;
