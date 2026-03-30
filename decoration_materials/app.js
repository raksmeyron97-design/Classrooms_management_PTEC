// app.js

// តំណភ្ជាប់ទៅកាន់ថតឯកសារ Google Drive រួមរបស់អ្នក
const GOOGLE_DRIVE_FOLDER_LINK = "https://drive.google.com/drive/folders/1p-XZXweae4Cspeu5tXDlZBFaiD29cBaI?usp=sharing";

/* ======================================================
របៀបយក Link ពី Google Drive មកដាក់៖
១. ចូលទៅកាន់ Google Drive របស់អ្នក (ឧទាហរណ៍ ចូល folder "traffic")
២. Right-click លើឯកសារ (ឧ. traffic_A0.pdf) រួចជ្រើសរើស "Share" (ចែករំលែក)
៣. ប្តូរ General access ទៅជា "Anyone with the link" (អ្នកណាក៏ដោយដែលមានតំណភ្ជាប់)
៤. ចុច "Copy link" រួចយកមក Paste ជំនួសក្នុងតម្លៃ `file: "..."` ខាងក្រោម។
======================================================
*/

const materialsData = [
    {
        id: 1,
        title: "អក្ខរក្រមអង់គ្លេស (Alphabet)",
        size: "5.6 MB",
        preview: "previews/abc/abc.png",
         sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1qi_BEFGVALfesTGyom9qO98lLtihLc-F/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1wSx018q4e4eAhBy0kwgziy_nt5MqjTLu/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ស័ក្តិសមសម្រាប់ចែកសិស្សម្នាក់ៗ", file: "https://drive.google.com/file/d/1HBVpVKgw_6GeA9Dttqir-6eVKj0qPBBk/view?usp=sharing", icon: "file" }
        ]
    },
    {
        id: 2,
        title: "ភ្លើងសញ្ញាចរាចរណ៍",
        size: "100-400 KB",
        // បើអ្នកចង់យករូបភាព Preview ពី Drive ដែរ សូមប្រើទម្រង់នេះ៖ "https://drive.google.com/uc?export=view&id=ជំនួស_ID_រូបភាព"
        preview: "previews/traffic/traffic.png", 
        sizes: [
            // ឧទាហរណ៍៖ ឯកសារក្នុង Folder "traffic" របស់អ្នក
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1iUafIEY-KkXaijZ2F0y3ofVwA5Mh1xSC/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1M8HjWrNimHz7nQp9jmw_Px-BlW9eQuAy/view?usp=sharing", icon: "layout" },
            { name: "ទំហំ A3", desc: "ស័ក្តិសមសម្រាប់ចែកសិស្សម្នាក់ៗ", file: "https://drive.google.com/file/d/1CqsvLyvIxARCmQl8-wHEvMZrCNnz0ifp/view?usp=sharing", icon: "file" }
        ]
    },
    {
        id: 3,
        title: "ភ្លើងសញ្ញាចរាចរណ៍ទាំង៣",
        size: "379 KB",
        preview: "previews/traffic/traffic_2.png",
        sizes: [
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1Evw9olzsdz3YYwvCf5ch_Wk3giFQ_BLF/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 4,
        title: "ឆ្នាំទាំង១២",
        size: "8.0 MB",
        preview: "previews/years12/years12.png",
        sizes: [
            // ឧទាហរណ៍៖ ឯកសារក្នុង Folder "yeasr12" របស់អ្នក
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1aCSeFjOMvMrmy-BCFqiOUOSZFwF_AFnQ/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 5,
        title: "សម្លៀកបំពាក់ទាំង៧ថ្ងៃ",
        size: "1.153 MB",
        preview: "previews/7_day_of_cloths/7_day.png",
        sizes: [
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1wj5K0-KNm8wpcj9RGTO0MR9rjvqbxWeL/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 6,
        title: "របៀបសំពះទាំង៥",
        size: "4.6 MB",
        preview: "previews/salute/salute.png",
        sizes: [
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1OI1GPfg29B5zZwWT-SJonIq9Rh2ZCMVq/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 7,
        title: "គោលការណ៍សំខាន់ៗក្នុងថ្នាក់រៀនសម្រាប់សិស្ស",
        size: "28.8 MB",
        preview: "previews/classroom_principle_student/student.png",
        sizes: [
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1gFTAYXo9b5tyT2uMzoch5gN4z0U3Daui/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 8,
        title: "គោលការណ៍សំខាន់ៗក្នុងថ្នាក់រៀនសម្រាប់គ្រូបង្រៀន",
        size: "28.8 MB",
        preview: "previews/classroom_principle_teacher/taecher.png",
        sizes: [
            // ឧទាហរណ៍៖ ឯកសារក្នុង Folder "principle_teacher" របស់អ្នក
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/18tE-k_hW_7CtRIJ7S9HMG5ysQ_TxZ142/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 9,
        title: "មេគុណលេខ ១ ដល់ ៩ លេខខ្មែរ",
        size: "1.5 MB",
        preview: "previews/primary_number_2->9.pdf/Khmer.png",
        sizes: [
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1_P8fT-3Mib-nZ2OuULWmdLV0kzsaorAN/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 10,
        title: "មេគុណលេខ ១ ដល់ ៩ លេខអារ៉ាប់",
        size: "1.5 MB",
        preview: "previews/primary_number_2->9.pdf/en.png",
        sizes: [
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1cCRBiMgC1FoOqCTsRL45cZABVWsSlm09/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 11,
        title: "ទិសទាំង៨ ជាអក្សរ",
        size: "43.8 MB",
        preview: "previews/8_direction/text.png",
        sizes: [
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1iVb_HmtJcoIzh_UWpKzipsQ5QZfQYHoh/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 12,
        title: "ទិសទាំង៨",
        size: "389 KB & 4.9 MB",
        preview: "previews/8_direction/8_directions.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1KQm6pnD7oo8ih2lCeiDDWhRkcDxwcOyg/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1_1EOcJj34wPP3lbYA_4Yiaijh1TXXmfe/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1dUIh8nvXNPrHGbhDF-kEo-wRTYe32Sj7/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 13,
        title: "សិទ្ធិកុមារ១",
        size: "1.45 MB & 4.6 MB",
        preview: "previews/chlidren's_right/children's_right.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1Qd5gGwDQpGaIHsFkF6ekSM5GJuOuHF4k/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1KN3QC1-mPR-I__r2k791H95dHIHb0peV/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/10TgCDr_8PGVSfoHuTzF_B8RSDHuZe_5y/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 14,
        title: "សិទ្ធិកុមារ២",
        size: "912 KB & 600 KB",
        preview: "previews/chlidren's_right/children's_right2.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1B6Fvaj6sMmyGiZ6LMbgSumcBKQstLafq/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1StIieaSkTDe7mnNl4MMgW0AseBXPXxCY/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/146aIeYXFuAPhuguabVfXZvNAPw82ccsa/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 15,
        title: "ចតុស្តម្ភនៃការអប់រំ",
        size: "2.1 MB & 1.7 MB",
        preview: "previews/14_Pillars_of_education/pfe.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1tK7KShZKlhx6ELZv19mGe4H-h3IjDnqX/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1O1nahdNrjtO1aXnGkG23iayshDBA-YsD/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1b-k2iPep0Xkrj1k_83lWw89Dy33zqnJR/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 16,
        title: "ប្រភេទត្រីកោណ ១",
        size: "1.6 MB & 1 MB",
        preview: "previews/types_of_triangle/There_are_four_types_of_triangles;_Scalene,_Right,_Acute,_and_Isosceles.png",
        sizes: [
            // ឧទាហរណ៍៖ ឯកសារក្នុង Folder "Types_of_Triangle" របស់អ្នក
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1UOuQIrJqYJ1Q9u0kVHagilxSmF6fgYgW/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1gumLDqYXmNRCW2NZFVt1xKQS9P-ILK8r/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1KGYiQC5TC0UhiE53KwP1n_2uEmvv28so/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 17,
        title: "ប្រភេទត្រីកោណ ២",
        size: "36.7 MB",
        preview: "previews/types_of_triangle/types3.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1b7_GPFQYeGVOhk1jZ8upwnWmuWSo6cFD/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1SLYIfMsHQTm198fkonkhMdZ1pSJ_ByME/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1Dy6awhkEfHrvWgQSCGKQo4HSr3VaDOz5/view?usp=sharing", icon: "file-text" }
        ]
    },
     {
        id: 18,
        title: "រូបធរណីមាត្រ ការេ ចតុកោណ ត្រីកោណ និងរង្វង់",
        size: "166 KB & 400 KB",
        preview: "previews/types_of_triangle/types2.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1ph5D-lcqgPYIcpGkPj881-YglrSjTjFD/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1X4jrfNHPV07AhwHdS-rBna_Zt5O1T4YQ/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/18oFIxdlJzATfQNpZvqi7C412vdG3NmLn/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 19,
        title: "រូបផ្គុំគ្រោងឆ្អឹង",
        size: "0.9 MB & 0.7 MB",
        preview: "previews/Skeleton_puzzle/Skeleton_puzzle.png",
        sizes: [
            // ឧទាហរណ៍៖ ឯកសារក្នុង Folder "Skeleton_puzzle" របស់អ្នក
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1X-W1lDPZf0lKbZRGAX_-YlOQPpIbepsD/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1UtVobAVEt0U7xSBhAukGw-KtNJeZuXbW/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1zzka7AqdjNxSYg0aeMS81eLfULo4D4P8/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 20,
        title: "ឧបករណ៍ភ្លេងខ្មែរ",
        size: "46.7 MB",
        preview: "previews/Khmer_musical_instruments/kmi.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1QtgkGztgjWHwigBArzVeMdHHCnPVB_o2/view?usp=drive_link", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1rH9RRCjvggI1ZnHZ-gvDwfq1AD71A6w2/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1XRS102xGfKx6ARt8CTTI1nQM-KcrQaaD/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 21,
        title: "ម៉ែត្រវាស់កម្ពស់",
        size: "20.9 MB",
        preview: "previews/metter/metter.png",
        sizes: [
            { name: "ទំហំ A3", desc: "ឯកសារទំហំ A3", file: "https://drive.google.com/file/d/1pnTKOEzQqWpFabZXr65GqTXfhNWKeKn3/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 22,
        title: "ដេគ័រ",
        size: "25.9MB",
        preview: "previews/decor/decor.png",
        sizes: [
            { name: "ទំហំ A3", desc: "ឯកសារទំហំ A3", file: "https://drive.google.com/file/d/1WJ7qu9-lSV1tGHWlcg-sViWU-muW1MZ1/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 23,
        title: "ភពទាំង៨",
        size: "211 KB",
        preview: "previews/planet/planet.png",
        sizes: [
            { name: "ទំហំ A4", desc: "ឯកសារទំហំ A4", file: "https://drive.google.com/file/d/1RiT9sB7-PinFifz7rSXwd3CU6Nno5Qc8/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 24,
        title: "រុក្ខជាតិ ផ្លែ ស្លឹក មើម",
        size: "211 KB",
        preview: "previews/Plants/plant.png",
        sizes: [
            { name: "ទំហំ A4", desc: "ឯកសារទំហំ A4", file: "https://drive.google.com/file/d/1oTVS7Y891t1SHa3LyrrVhaIxQizGGee2/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 25,
        title: "ចតុស្ដម្ភអប់រំ និង ព្រហ្មវិហារធម៌ទាំងបួន",
        size: "324 KB",
        preview: "previews/14_Pillars_of_education/pfe2.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1bYAcIduGh3KbsLmFwCJrxsxGUI_3_ycK/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1FM13fahxzrWxa74KhlyjHsKHQYUWVSu9/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1weYZkRpZcWne9PvAYrAww3nJr6quJlaD/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 26,
        title: "របៀបសំពះខ្មែរទាំង៥ (២)",
        size: "324 KB",
        preview: "previews/Khmer_Greeting/Khmer_Greeting.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1BzXBsqWAjLkobERJBCp0AzI-wSI6ZLHU/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/114idhWG-taFcNzbS5LD7pSGyuAqy4ygc/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1_4_cgQ2lbwbGmHsPGGmLEdlen2456w_3/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 27,
        title: "របៀបសំពះខ្មែរទាំង៥ (៣)",
        size: "324 KB",
        preview: "previews/Khmer_Greeting/Khmer_Greeting2.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1nfXkoIBeghoaWWbfgS8TxzjkdUv5RfM7/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1wSgi6z0fCr239MKxnvvBZdtnQKm8zD9c/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1vRi6ZiHXjporxCwrR1k-Dake587GIaMV/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 28,
        title: "របៀបសំពះខ្មែរទាំង៥ (៤)",
        size: "324 KB",
        preview: "previews/Khmer_Greeting/Khmer_Greeting3.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1j2s1uDoGzUjXr403-TT_ZecDIMmMlJvY/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1fGBT56kyxGMWfWSUU7P0KfwjO3UKktXS/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1zhtVl4aVZ_y1wYwGYSSN4QTHp09MWols/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 29,
        title: "ខែសកល ១",
        size: "33.5 MB",
        preview: "previews/monthly/1.png",
        sizes: [
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "pdfs/mothly/monthly_of_khmer.pdf", icon: "file-text" }
        ]
    },
    {
        id: 30,
        title: "ខែសកល ២",
        size: "33.5 MB",
        preview: "previews/monthly/monthly_of_khmer4.jpg",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1tYMBhliArrgVazceunWSuRYlFGZ-ZRjG/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1_xRdgWoQmcPYZONa7UpXMCrOXtg2VTI8/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1trTbnc2G9wuKrgWIEPfsfPn-puCmPPA8/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 31,
        title: "ខែខ្មែរ ១",
        size: "49.7 MB",
        preview: "previews/monthly/3.png",
        sizes: [
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1uVIDzwke4euWeKShKMTZh5Z1KbnTKkr0/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 32,
        title: "ខែខ្មែរ ២",
        size: "9.3 MB",
        preview: "previews/monthly/monthly_of_khmer1.jpg",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1saBYDESSTDElEW5q4RagkfI99ZEcok3v/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/11_HT7X7Yk5fNZ8LORvaY7FL2SLRi_L79/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1wpAa3A79_ArkJv26yuyE7LpdGPuniCQi/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 33,
        title: "បទកាកគតិ", // អាចប្តូរចំណងជើងទៅជា បទកាកគតិ
        size: "9.3 MB",
        preview: "previews/បទកាកគតិ/1.png",
        sizes: [
            // ឧទាហរណ៍៖ ឯកសារក្នុង Folder "បទកាកគតិ" របស់អ្នក
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1ShcOfKzeDif7YXRAbEFFF_YS58ccB7Zj/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1IA0lTUb-EZnW2iz9rRfnrTACIYIG_UJe/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1rXwTYGdevg-Lmt-r1YBO-4Rs0X3wgiHj/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 34,
        title: "បទពាក្យប្រាំពីរ", // អាចប្តូរចំណងជើងទៅជា បទកាកគតិ
        size: "9.3 MB",
        preview: "previews/បទពាក្យប្រាំពីរ/1.png",
        sizes: [
            // ឧទាហរណ៍៖ ឯកសារក្នុង Folder "បទកាកគតិ" របស់អ្នក
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1BNQZiVYC4Irv8c6qxTlQnzcWMh0gDMvr/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/17-ueg3grHJB1r9v-QqruXeKMy-Q-kznn/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1zIyPYhV-mFlpz_twaMdcg6fWT98REPVL/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 35,
        title: "ប័ណ្ណរូប ព្យញ្ជនៈ ក ខ", // អាចប្តូរចំណងជើងទៅជា បទកាកគតិ
        size: "2.4 MB & 7 MB",
        preview: "previews/កខគ/1.png",
        sizes: [
            { name: "PowerPoint", desc: "ស័ក្តិសមសម្រាប់យកទៅកែបន្ថែម", file: "https://docs.google.com/presentation/d/1czeWtwfRide0yaJnnUi13f5vDq1vXVer/edit?usp=sharing&ouid=108233550721288763250&rtpof=true&sd=true", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1zQNBU5o0hE_nKwL2HzGQpkG796_UiW8i/view?usp=sharing", icon: "file-text" }
        ]
    },
    {
        id: 36,
        title: "វិញ្ញាណទាំង ៥ របស់ខ្ញុំ", // 
        size: "380 KB",
        preview: "previews/វិញ្ញាណទាំង៥របស់ខ្ញុំ/1.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1u8TD02gRRm_AoRgOvIQkb5wewP2h4LY5/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1H--YAjCMx0avWjHpzdEGw7JCHarAEyAE/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1PrUZ2G8wZwHQZZKDIa53IegYnnWcfVM9/view?usp=sharing", icon: "file-text" }   
        ]
    },
    {
        id: 37,
        title: "អត្តន័យស្លាកសញ្ញាចរាចរ", // 
        size: "2.4 MB & 7 MB",
        preview: "previews/អត្តន័យស្លាកសញ្ញាចរាចរ/1.png",
        sizes: [
            { name: "ទំហំ A0", desc: "ស័ក្តិសមសម្រាប់បោះពុម្ពផ្ទាំងធំ", file: "https://drive.google.com/file/d/1zJcr8QQpPog5LuSgyeo2lxEy-xTagFYR/view?usp=sharing", icon: "monitor" },
            { name: "ទំហំ A1", desc: "ស័ក្តិសមសម្រាប់បិទលើក្តារខៀន", file: "https://drive.google.com/file/d/1lUfPfKP5e_eM5c47AcVb1jhr1kSTFwmT/view?usp=sharing", icon: "layout" },
            { name: "ទំហំដើម", desc: "ឯកសារទំហំធម្មតា", file: "https://drive.google.com/file/d/1O_60I5QKGavMdB_OPSUcfKOaTfgRI1Pe/view?usp=sharing", icon: "file-text" }   
        ]
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('materials-container');
    const searchInput = document.getElementById('search-material');
    const noResults = document.getElementById('no-results');
    const modal = document.getElementById('material-modal');

    // ២. Function សម្រាប់ Render កាតសម្ភារៈនីមួយៗលើទំព័រដើម
    function renderMaterials(items) {
        container.innerHTML = '';
        if (items.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            items.forEach((item, index) => {
                const delay = index * 0.1; 
                const card = document.createElement('div');
                card.className = `card-entrance bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group flex flex-col cursor-pointer hover:shadow-md transition-shadow`;
                card.style.animationDelay = `${delay}s`;
                
                // បន្ថែម Event ពេលចុចលើ Card ទាំងមូល ឲ្យបើក Modal
                card.onclick = () => openModal(item.id);

                card.innerHTML = `
                    <div class="material-img-wrapper relative h-56 bg-gray-100 dark:bg-gray-700 flex items-center justify-center border-b border-gray-100 dark:border-gray-700">
                        <img src="${item.preview}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/400x300?text=No+Preview'">
                        
                        <!-- ផ្ទៃពណ៌ខ្មៅ និងប៊ូតុងលោតពេលដាក់ Mouse ពីលើ -->
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                            <span class="text-[#0054a6] flex items-center gap-2 font-bold bg-white/95 px-5 py-2.5 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <i data-lucide="eye" class="w-5 h-5"></i> មើល និងទាញយក
                            </span>
                        </div>
                    </div>
                    <div class="p-5 flex-grow">
                        <h3 class="font-bold text-gray-900 dark:text-white mb-1 line-clamp-1" title="${item.title}">${item.title}</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <i data-lucide="file-text" class="w-4 h-4"></i> ទំហំ៖ ${item.size}
                        </p>
                    </div>
                `;
                container.appendChild(card);
            });
            
            // គូររូប Icons សារជាថ្មីក្រោយពេល Render
            if(window.lucide) {
                lucide.createIcons();
            }
        }
    }

    // ៣. Function សម្រាប់បើកផ្ទាំង Modal ពេលចុច
    window.openModal = function(id) {
        const item = materialsData.find(m => m.id === id);
        if (!item) return;

        // ដាក់ទិន្នន័យទៅក្នុង Modal
        document.getElementById('modal-image').src = item.preview;
        document.getElementById('modal-title').textContent = item.title;
        document.getElementById('modal-size').innerHTML = `<i data-lucide="file-text" class="w-4 h-4"></i> ទំហំដើម៖ ${item.size}`;
        
        // ស្វែងរកប្រអប់សម្រាប់ដាក់ប៊ូតុង និងប្តូរឲ្យទៅជា Dynamic Container
        let downloadContainer = document.getElementById('dynamic-download-container');
        if (!downloadContainer) {
            const oldA0 = document.getElementById('download-a0');
            if(oldA0) {
                downloadContainer = oldA0.parentElement;
                downloadContainer.id = 'dynamic-download-container';
            }
        }

        if (downloadContainer) {
            // លុបប៊ូតុងចាស់ៗចេញជាមុនសិន
            downloadContainer.innerHTML = ''; 

            // បង្កើតប៊ូតុងថ្មីដោយស្វ័យប្រវត្តិ ផ្អែកលើទំហំដែលមានក្នុងទិន្នន័យ (sizes)
            item.sizes.forEach(size => {
                const btn = document.createElement('a');
                btn.href = size.file; // ប្រើប្រាស់ Google Drive URL នៅទីនេះ
                btn.target = "_blank"; // បើកផ្ទាំងថ្មី (ព្រោះ Drive Link មិនអាចប្រើ attribute 'download' បានទេ)
                btn.rel = "noopener noreferrer"; // សម្រាប់សុវត្ថិភាព
                btn.className = "flex items-center justify-between px-5 py-3 bg-white dark:bg-gray-800 hover:border-[#0054a6] border-2 border-transparent shadow-sm rounded-xl transition-all group cursor-pointer";
                
                btn.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="bg-[#0054a6]/10 text-[#0054a6] p-2 rounded-lg group-hover:bg-[#0054a6] group-hover:text-white transition-colors">
                            <i data-lucide="${size.icon}" class="w-5 h-5"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-bold text-gray-700 dark:text-gray-200 group-hover:text-[#0054a6] dark:group-hover:text-blue-400 transition-colors">${size.name}</span>
                            <span class="text-xs text-gray-500">${size.desc}</span>
                        </div>
                    </div>
                    <i data-lucide="external-link" class="w-5 h-5 text-gray-400 group-hover:text-[#0054a6] dark:group-hover:text-blue-400"></i>
                `;
                downloadContainer.appendChild(btn);
            });

            // ប៊ូតុងចូលទៅកាន់ Google Drive Folder រួមដែលអ្នកបានផ្តល់ឲ្យ
            const driveBtn = document.createElement('a');
            driveBtn.href = GOOGLE_DRIVE_FOLDER_LINK;
            driveBtn.target = "_blank";
            driveBtn.rel = "noopener noreferrer";
            driveBtn.className = "flex items-center justify-between px-5 py-4 mt-3 bg-blue-50 dark:bg-blue-900/20 hover:border-[#0054a6] border-2 border-blue-200 dark:border-blue-800 shadow-sm rounded-xl transition-all group cursor-pointer";
            
            driveBtn.innerHTML = `
                <div class="flex items-center gap-3">
                    <div class="bg-blue-100 dark:bg-blue-800/50 text-[#0054a6] dark:text-blue-400 p-2.5 rounded-lg group-hover:bg-[#0054a6] group-hover:text-white transition-colors shadow-sm">
                        <i data-lucide="folder-open" class="w-5 h-5"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-black text-gray-800 dark:text-gray-200 group-hover:text-[#0054a6] dark:group-hover:text-blue-400 transition-colors">ថតឯកសារក្នុង Google Drive</span>
                        <span class="text-[11px] font-bold text-gray-500 mt-0.5">បើកមើល និងទាញយកឯកសារទាំងអស់</span>
                    </div>
                </div>
                <i data-lucide="external-link" class="w-5 h-5 text-gray-400 group-hover:text-[#0054a6] transition-colors"></i>
            `;
            downloadContainer.appendChild(driveBtn);

            // ⭐ ផ្នែកបន្ថែមថ្មី៖ ប៊ូតុងកំណត់ទំហំដោយខ្លួនឯងចូលក្នុង Poster Splitter
            // លក្ខខណ្ឌ៖ បង្ហាញប៊ូតុងនេះលុះត្រាតែមានជម្រើសទំហំច្រើន (ធំជាង ១) 
            if (item.sizes.length > 1) {
                // ស្វែងរក File ដែលមានឈ្មោះ "ទំហំដើម"
                let targetSize = item.sizes.find(s => s.name.includes('ទំហំដើម'));
                let fileToEdit = targetSize ? targetSize.file : item.sizes[0].file;

                // -----------------------------------------------------------------
                // កែសម្រួល៖ បំប្លែងតំណភ្ជាប់ Google Drive ទៅជា Direct Link + Proxy
                // -----------------------------------------------------------------
                let finalUrl = fileToEdit;
                const driveIdMatch = fileToEdit.match(/\/d\/([a-zA-Z0-9_-]+)/);
                
                if (driveIdMatch && driveIdMatch[1]) {
                    const fileId = driveIdMatch[1];
                    // ១. បង្កើតតំណភ្ជាប់ទាញយកផ្ទាល់ (Direct Download Link) ពី Drive
                    const directDriveLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
                    // ២. ប្រើប្រាស់ Proxy ដើម្បីជៀសវាងបញ្ហា CORS Block ពី Browser
                    // ៣. បន្ថែម #.pdf ដើម្បីប្រាប់ index.html ថាវាជាឯកសារប្រភេទ PDF
                    finalUrl = `https://corsproxy.io/?${encodeURIComponent(directDriveLink)}#.pdf`;
                }
                // -----------------------------------------------------------------

                const customBtn = document.createElement('a');
                customBtn.href = `index.html?file=${encodeURIComponent(finalUrl)}`; // បញ្ជូន URL ឆ្លងកាត់ Query Parameters
                customBtn.target = '_blank'; // បើកផ្ទាំងថ្មី
                customBtn.className = "flex items-center justify-between px-5 py-4 mt-3 bg-orange-50 dark:bg-orange-900/20 hover:border-orange-500 border-2 border-orange-200 dark:border-orange-800 shadow-sm rounded-xl transition-all group cursor-pointer";
                
                customBtn.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="bg-orange-100 dark:bg-orange-800/50 text-orange-600 dark:text-orange-400 p-2.5 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors shadow-sm">
                            <i data-lucide="scissors" class="w-5 h-5"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-black text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">កំណត់ទំហំដោយខ្លួនឯង</span>
                            <span class="text-[11px] font-bold text-gray-500 mt-0.5">បើកក្នុងកម្មវិធី Poster Splitter ដើម្បីកាត់ជាសន្លឹក</span>
                        </div>
                    </div>
                    <i data-lucide="external-link" class="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors"></i>
                `;
                downloadContainer.appendChild(customBtn);
            }
        }

        // បង្ហាញ Modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // បិទការ Scroll ផ្ទៃខាងក្រោយ
        
        if(window.lucide) lucide.createIcons();
    };

    // ៤. មុខងារបិទ Modal
    document.getElementById('close-modal').addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // បើកការ Scroll វិញ
    });

    // បិទ Modal ពេលចុចលើផ្ទៃទទេខាងក្រៅ
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // បង្ហាញទិន្នន័យលើកដំបូងពេល Load វិបសាយ
    renderMaterials(materialsData);

    // ៥. មុខងារស្វែងរក (Search)
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMaterials = materialsData.filter(material => 
            material.title.toLowerCase().includes(searchTerm)
        );
        renderMaterials(filteredMaterials);
    });

    // ៦. មុខងារ Dark/Light Mode Toggle
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    
    // ឆែកមើល state បច្ចុប្បន្នដើម្បីបង្ហាញ Icon ព្រះអាទិត្យ/ព្រះចន្ទ ឲ្យត្រូវ
    if (document.documentElement.classList.contains('dark')) {
        document.querySelectorAll('.theme-toggle-light-icon').forEach(icon => icon.classList.remove('hidden'));
    } else {
        document.querySelectorAll('.theme-toggle-dark-icon').forEach(icon => icon.classList.remove('hidden'));
    }

    // ចាប់ Event ពេលចុចប្តូរពណ៌
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.theme-toggle-dark-icon').forEach(icon => icon.classList.toggle('hidden'));
            document.querySelectorAll('.theme-toggle-light-icon').forEach(icon => icon.classList.toggle('hidden'));
            
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        });
    });
    
    // បង្កើត Icons ទាំងអស់លើកដំបូង
    if(window.lucide) {
        lucide.createIcons();
    }
});