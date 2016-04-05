"use strict";
const Constants = require ("../../../Constants");
const PaleRecluseBase = require("../setARB/PaleRecluse");

class PaleRecluse extends PaleRecluseBase {
  constructor(game) {
    super(game, "Pale Recluse", "Archenemy", "ARC");
  }
}

module.exports = PaleRecluse;
