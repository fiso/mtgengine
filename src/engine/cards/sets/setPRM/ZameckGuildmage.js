"use strict";
const Constants = require ("../../../Constants");
const ZameckGuildmageBase = require("../setGTC/ZameckGuildmage");

class ZameckGuildmage extends ZameckGuildmageBase {
  constructor (game) {
    super(game, "Zameck Guildmage", "Magic Online Promos", "PRM");
  }
}

module.exports = ZameckGuildmage;
