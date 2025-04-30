class NoteItem extends HTMLElement {
    static get observedAttributes() {
        return ["title", "body", "category"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="note-card">
                <span class="note-category">${this.getAttribute("category") || "Umum"}</span>
                <h3>${this.getAttribute("title") || "Tanpa Judul"}</h3>
                <p>${this.getAttribute("body") || "Tanpa Isi"}</p>
                <button class="delete-btn">Hapus</button>
            </div>
        `;

        this.querySelector(".delete-btn").addEventListener("click", () => {
            this.remove();
            deleteNote(this.getAttribute("title"));
        });
    }
}

customElements.define("note-item", NoteItem);
