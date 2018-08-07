"use strict";
const Constants = require ("../../../Constants");
const EtherswornCanonistBase = require("../setMMA/EtherswornCanonist");

class EtherswornCanonist extends EtherswornCanonistBase {
  constructor (game) {
    super(game, "Ethersworn Canonist", "Shards of Alara", "ALA");
  }
}

module.exports = EtherswornCanonist;
