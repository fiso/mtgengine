"use strict";
const Constants = require ("../../../Constants");
const SelvalasStampedeBase = require("../setPZ2/SelvalasStampede");

class SelvalasStampede extends SelvalasStampedeBase {
  constructor (game) {
    super(game, "Selvala's Stampede", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SelvalasStampede;
