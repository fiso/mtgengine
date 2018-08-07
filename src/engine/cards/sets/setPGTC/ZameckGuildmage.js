"use strict";
const Constants = require ("../../../Constants");
const ZameckGuildmageBase = require("../setGTC/ZameckGuildmage");

class ZameckGuildmage extends ZameckGuildmageBase {
  constructor (game) {
    super(game, "Zameck Guildmage", "Gatecrash Promos", "PGTC");
  }
}

module.exports = ZameckGuildmage;
