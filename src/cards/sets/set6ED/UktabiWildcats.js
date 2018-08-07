"use strict";
const Constants = require ("../../../Constants");
const UktabiWildcatsBase = require("../set7ED/UktabiWildcats");

class UktabiWildcats extends UktabiWildcatsBase {
  constructor (game) {
    super(game, "Uktabi Wildcats", "Classic Sixth Edition", "6ED");
  }
}

module.exports = UktabiWildcats;
