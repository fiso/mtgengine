"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UktabiWildcatsBase = require("../set6ED/UktabiWildcats.js");

class UktabiWildcats extends UktabiWildcatsBase {
  constructor(game) {
    super(game, "Uktabi Wildcats", "Seventh Edition", "7ED");
  }
}

module.exports = UktabiWildcats;
