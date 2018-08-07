"use strict";
const Constants = require ("../../../Constants");
const AkiriLineSlingerBase = require("../setPZ2/AkiriLineSlinger");

class AkiriLineSlinger extends AkiriLineSlingerBase {
  constructor (game) {
    super(game, "Akiri, Line-Slinger", "Commander 2016", "C16");
  }
}

module.exports = AkiriLineSlinger;
