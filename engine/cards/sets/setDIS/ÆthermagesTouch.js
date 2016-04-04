"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆthermagesTouchBase = require("../setC13/ÆthermagesTouch.js");

class ÆthermagesTouch extends ÆthermagesTouchBase {
  constructor(game) {
    super(game, "Æthermage's Touch", "Dissension", "DIS");
  }
}

module.exports = ÆthermagesTouch;
