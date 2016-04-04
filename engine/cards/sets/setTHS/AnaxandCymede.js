"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnaxandCymedeBase = require("../setDDL/AnaxandCymede.js");

class AnaxandCymede extends AnaxandCymedeBase {
  constructor(game) {
    super(game, "Anax and Cymede", "Theros", "THS");
  }
}

module.exports = AnaxandCymede;
