"use strict";
const Constants = require ("../../../Constants");
const ArcboundRavagerBase = require("../setMPS/ArcboundRavager");

class ArcboundRavager extends ArcboundRavagerBase {
  constructor (game) {
    super(game, "Arcbound Ravager", "World Championship Decks 2004", "WC04");
  }
}

module.exports = ArcboundRavager;
