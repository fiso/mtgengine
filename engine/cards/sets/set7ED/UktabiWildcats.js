"use strict";
const Constants = require ("../../../Constants");
const UktabiWildcatsBase = require("../set6ED/UktabiWildcats");

class UktabiWildcats extends UktabiWildcatsBase {
  constructor(game) {
    super(game, "Uktabi Wildcats", "Seventh Edition", "7ED");
  }
}

module.exports = UktabiWildcats;
