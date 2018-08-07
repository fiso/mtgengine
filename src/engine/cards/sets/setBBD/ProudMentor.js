"use strict";
const Constants = require ("../../../Constants");
const ProudMentorBase = require("../setPBBD/ProudMentor");

class ProudMentor extends ProudMentorBase {
  constructor (game) {
    super(game, "Proud Mentor", "Battlebond", "BBD");
  }
}

module.exports = ProudMentor;
