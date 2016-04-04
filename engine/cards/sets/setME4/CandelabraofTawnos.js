"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CandelabraofTawnosBase = require("../setATQ/CandelabraofTawnos.js");

class CandelabraofTawnos extends CandelabraofTawnosBase {
  constructor(game) {
    super(game, "Candelabra of Tawnos", "Masters Edition IV", "ME4");
  }
}

module.exports = CandelabraofTawnos;
