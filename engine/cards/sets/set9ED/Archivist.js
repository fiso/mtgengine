"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchivistBase = require("../set8ED/Archivist.js");

class Archivist extends ArchivistBase {
  constructor(game) {
    super(game, "Archivist", "Ninth Edition", "9ED");
  }
}

module.exports = Archivist;
