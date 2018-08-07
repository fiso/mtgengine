"use strict";
const Constants = require ("../../../Constants");
const HasranOgressBase = require("../setME4/HasranOgress");

class HasranOgress extends HasranOgressBase {
  constructor (game) {
    super(game, "Hasran Ogress", "Arabian Nights", "ARN");
  }
}

module.exports = HasranOgress;
