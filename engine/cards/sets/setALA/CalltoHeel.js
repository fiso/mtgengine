"use strict";
const Constants = require ("../../../Constants");
const CalltoHeelBase = require("../setDDJ/CalltoHeel");

class CalltoHeel extends CalltoHeelBase {
  constructor(game) {
    super(game, "Call to Heel", "Shards of Alara", "ALA");
  }
}

module.exports = CalltoHeel;
