"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZameckGuildmageBase = require("../setGTC/ZameckGuildmage.js");

class ZameckGuildmage extends ZameckGuildmageBase {
  constructor(game) {
    super(game, "Zameck Guildmage", "Magic Game Day", "pMGD");
  }
}

module.exports = ZameckGuildmage;
