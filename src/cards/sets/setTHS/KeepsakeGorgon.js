"use strict";
const Constants = require ("../../../Constants");
const KeepsakeGorgonBase = require("../setCN2/KeepsakeGorgon");

class KeepsakeGorgon extends KeepsakeGorgonBase {
  constructor (game) {
    super(game, "Keepsake Gorgon", "Theros", "THS");
  }
}

module.exports = KeepsakeGorgon;
