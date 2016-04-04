"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PaleRecluseBase = require("../setARB/PaleRecluse.js");

class PaleRecluse extends PaleRecluseBase {
  constructor(game) {
    super(game, "Pale Recluse", "Archenemy", "ARC");
  }
}

module.exports = PaleRecluse;
