"use strict";
const Constants = require ("../../../Constants");
const AnaxandCymedeBase = require("../setDDL/AnaxandCymede");

class AnaxandCymede extends AnaxandCymedeBase {
  constructor (game) {
    super(game, "Anax and Cymede", "Theros", "THS");
  }
}

module.exports = AnaxandCymede;
