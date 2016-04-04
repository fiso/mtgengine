"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EtherswornCanonistBase = require("../setMMA/EtherswornCanonist.js");

class EtherswornCanonist extends EtherswornCanonistBase {
  constructor(game) {
    super(game, "Ethersworn Canonist", "Shards of Alara", "ALA");
  }
}

module.exports = EtherswornCanonist;
