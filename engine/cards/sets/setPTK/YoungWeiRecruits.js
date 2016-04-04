"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YoungWeiRecruitsBase = require("../setME3/YoungWeiRecruits.js");

class YoungWeiRecruits extends YoungWeiRecruitsBase {
  constructor(game) {
    super(game, "Young Wei Recruits", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = YoungWeiRecruits;
