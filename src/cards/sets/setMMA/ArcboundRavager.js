"use strict";
const Constants = require ("../../../Constants");
const ArcboundRavagerBase = require("../setDST/ArcboundRavager");

class ArcboundRavager extends ArcboundRavagerBase {
  constructor (game) {
    super(game, "Arcbound Ravager", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundRavager;
