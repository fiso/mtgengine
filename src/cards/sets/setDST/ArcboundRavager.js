"use strict";
const Constants = require ("../../../Constants");
const ArcboundRavagerBase = require("../setMPS/ArcboundRavager");

class ArcboundRavager extends ArcboundRavagerBase {
  constructor (game) {
    super(game, "Arcbound Ravager", "Darksteel", "DST");
  }
}

module.exports = ArcboundRavager;
