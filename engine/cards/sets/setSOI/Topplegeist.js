"use strict";
const Constants = require ("../../../Constants");
const TopplegeistBase = require("../setDDQ/Topplegeist");

class Topplegeist extends TopplegeistBase {
  constructor(game) {
    super(game, "Topplegeist", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Topplegeist;
