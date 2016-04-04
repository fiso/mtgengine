"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcboundRavagerBase = require("../setDST/ArcboundRavager.js");

class ArcboundRavager extends ArcboundRavagerBase {
  constructor(game) {
    super(game, "Arcbound Ravager", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundRavager;
