"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CalltoHeelBase = require("../setDDJ/CalltoHeel.js");

class CalltoHeel extends CalltoHeelBase {
  constructor(game) {
    super(game, "Call to Heel", "Shards of Alara", "ALA");
  }
}

module.exports = CalltoHeel;
